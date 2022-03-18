package com.example.springapp.Service;

import java.io.IOException;
import java.util.stream.Stream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import com.example.springapp.Model.Model;
import com.example.springapp.Repository.FileRepository;
@Service
public class AppService {
    //Service file as of created Document Endpoint 
    @Autowired
    private FileRepository FileRepository;
    public Model store(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Model FileDB = new Model(fileName, file.getContentType(), file.getBytes());
        return FileRepository.save(FileDB);
    }
    public Model getFile(String id) {
        return FileRepository.findById(id).get();
    }

    public Stream<Model> getAllFiles() {
        return FileRepository.findAll().stream();
    }
}
