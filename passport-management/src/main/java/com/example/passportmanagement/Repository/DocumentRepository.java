package com.example.passportmanagement.Repository;


import com.example.passportmanagement.model.DocumentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


//Overall Repository file as of implemented for Documenent Endpoint .
@Repository
public interface DocumentRepository extends JpaRepository<DocumentModel, String> {
}