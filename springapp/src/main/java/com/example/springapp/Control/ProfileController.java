package com.example.springapp.Control;



import com.example.springapp.Model.Profile;
import com.example.springapp.Repository.ProfileRepository;
import com.example.springapp.Service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class ProfileController {

    @Autowired
    private ProfileService profileService ;

    @PostMapping("/addProfile")
    public Profile addProduct(@RequestBody Profile profile) {
        return profileService.saveProfile(profile);
    }

    @PostMapping("/addProfiles")
    public List<Profile> addProducts(@RequestBody List<Profile> profiles) {
        return profileService.saveAllProfile(profiles);
    }

    //Get Method
//    @GetMapping("/profiles")
//    public List<Profile> findAllProfiles() {
//        return profileService.getAllProfile();
//    }

    @GetMapping("/profileById/{profileId}")
    public Profile findProfileById(@PathVariable int profileId) {
        return profileService.getProfileById(profileId);
    }

    @PutMapping("/update")
    public Profile updateProduct(@RequestBody Profile profile) {
        return profileService.updateProfile(profile);
    }

    @DeleteMapping("/delete/{profileId}")
    public String deleteProfile(@PathVariable int profileId) {
        return profileService.deleteById(profileId);
    }


}
