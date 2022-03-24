package com.example.springapp.Service;

import com.example.springapp.Model.UserProfile;
import com.example.springapp.Repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserProfileService {
    @Autowired
    private UserProfileRepository userprofilerepo;

    public void saveOrUpdate(UserProfile profile){
        userprofilerepo.save(profile);

    }
    public void getDelete(int profileid){
        userprofilerepo.deleteById(profileid);
    }

    public UserProfile viewUserById(int profileid){
        return userprofilerepo.findById(profileid).get();
    }
}

