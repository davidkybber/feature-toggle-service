package com.davidkybber.authentication

import io.quarkus.runtime.StartupEvent
import jakarta.enterprise.event.Observes
import jakarta.inject.Singleton
import jakarta.transaction.Transactional

@Singleton
class Startup {
    @Transactional
    fun loadUsers(@Observes evt: StartupEvent?) {
        // reset and load all test users
        User.deleteAll()
        User.add("admin", "admin", "admin")
        User.add("user", "user", "user")
    }
}

