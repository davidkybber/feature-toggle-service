package com.davidkybber.authentication

import jakarta.transaction.Transactional
import jakarta.ws.rs.*
import jakarta.ws.rs.core.MediaType

@Path("/api/user")
class UserResource {
    @GET
    fun getUsers(): String {
        return "The users: ${User.listAll().map { it.username }}"
    }

    @POST
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    fun addUser(userDTO: UserDTO) {
        User.add(userDTO.username, userDTO.password, "user")
    }

    @DELETE
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/{username}")
    fun deleteUser(@PathParam("username") username: String) {
        User.deleteByUsername(username)
    }
}
