package com.example.springapp.Control;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import com.example.springapp.Repository.FileRepository;
import com.example.springapp.Service.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import com.example.springapp.Message.ResponseFile;
import com.example.springapp.Message.ResponseMessage;
import com.example.springapp.Model.Model;
@Controller
//@CrossOrigin("http://localhost:8081")
public class AppController {
    @Autowired
    private AppService storageService;

    //To Add Documents-Endpoint
    @PostMapping("/user/addDocument")
    @ResponseBody
    public String uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        storageService.store(file);
        return file.getOriginalFilename();
    }
    //To Get Documents-Endpoint
    @GetMapping("/user/getDocument")
    public ResponseEntity<List<ResponseFile>> getListFiles() {
        List<ResponseFile> files = storageService.getAllFiles().map(dbFile -> {
            String fileDownloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/files/")
                    .path(dbFile.getId())
                    .toUriString();
            return new ResponseFile(
                    dbFile.getName(),
                    fileDownloadUri,
                    dbFile.getType());
        }).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.OK).body(files);
    }
    //To View Documents-Endpoint
    @GetMapping("/user/getDocument/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable String id) {
        Model fileDB = storageService.getFile(id);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDB.getName() + "\"")
                .body(fileDB.getData());
    }

}