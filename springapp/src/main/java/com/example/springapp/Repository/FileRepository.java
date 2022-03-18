package com.example.springapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.springapp.Model.Model ;
@Repository
public interface FileRepository extends JpaRepository<Model, String> {
}