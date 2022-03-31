package com.example.springapp.Service;


import com.example.springapp.Model.Profile;
import com.example.springapp.Repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository ;

    //Post Method Service
    public Profile saveProfile (Profile profile){
        return profileRepository.save(profile);
    }
    public List<Profile> saveAllProfile(List<Profile> profiles){
        return profileRepository.saveAll(profiles);
    }

    //Get Method Service
    public List<Profile> getAllProfile (List<Profile> profiles){
        return profileRepository.findAll();
    }
    public Profile getProfileById (int profileId){
        return profileRepository.findById(profileId).orElse(null);
    }

    //Delete Method Service
    public String deleteById(int profileId){
        profileRepository.deleteById(profileId);
        return "Deleted" ;
    }

    //Update Method Service
    public Profile updateProfile(Profile profile) {
        Profile existingProfile =
                profileRepository.findById(profile.getProfileId()).orElse(null);
        existingProfile.setFirstName(profile.getFirstName());
        existingProfile.setMiddleName(profile.getMiddleName());
        existingProfile.setLastName(profile.getLastName());
        existingProfile.setAddress(profile.getAddress());
        existingProfile.setEmail(profile.getEmail());
        existingProfile.setMobile(profile.getMobile());
        return profileRepository.save(existingProfile);
    }

}
