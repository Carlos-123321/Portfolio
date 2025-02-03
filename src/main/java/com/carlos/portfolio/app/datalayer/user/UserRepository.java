package com.carlos.portfolio.app.datalayer.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // No need to write custom methods unless you need special queries
}
