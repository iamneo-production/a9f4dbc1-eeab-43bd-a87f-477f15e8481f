package com.example.passportmanagement.Repository;


import com.example.passportmanagement.model.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);
	
	Optional<User> findById(Long id);


	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
	
	@Query(value = "select u.id,u.username,u.phone,u.email from users u",nativeQuery = true)
	public List<Map<String,Object>> getAllUsers();
}
