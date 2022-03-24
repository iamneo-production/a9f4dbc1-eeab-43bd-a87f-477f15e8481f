package com.example.springapp.Control;
import com.example.springapp.Model.UserProfile;
import com.example.springapp.Repository.UserProfileRepository;
import com.example.springapp.Service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@RestController
public class UserProfileController {
@Autowired
    UserProfileService userprofileservice;
@Autowired
    UserProfileRepository userprofilerepository;


    @PostMapping("/user/addProfile")
    private String addProfile(@RequestBody UserProfile profile){
        userprofileservice.saveOrUpdate(profile);
        return "Profile Added";
    }
    @PutMapping("/user/editProfile/{profileid}")
    private String editProfile(@PathVariable int profileid ,@RequestBody UserProfile profile){
        userprofileservice.saveOrUpdate(profile);
        return profile.toString();

    }
    @GetMapping("/user/viewProfile/{profileid}")
    public UserProfile viewUser(@RequestParam("profileid") int profileid){
       return userprofileservice.viewUserById(profileid);
    }
    @DeleteMapping(path = "/user/deleteProfile/{profileid}")
    public String deleteProfile(@PathVariable int profileid){
       userprofileservice.getDelete(profileid);
       return "Profile Deleted";
    }
}
