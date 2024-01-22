package com.davidkybber.authentication


import io.quarkus.elytron.security.common.BcryptUtil
import io.quarkus.hibernate.orm.panache.kotlin.PanacheCompanion
import io.quarkus.hibernate.orm.panache.kotlin.PanacheEntity
import io.quarkus.security.jpa.Password
import io.quarkus.security.jpa.Roles
import io.quarkus.security.jpa.UserDefinition
import io.quarkus.security.jpa.Username
import jakarta.persistence.Entity
import jakarta.persistence.Table

@Entity
@Table(name = "feature-toggle-user")
@UserDefinition
class User: PanacheEntity() {
    companion object: PanacheCompanion<User> {
        fun add(username: String, password: String, role: String) {
            val user = User().apply {
                this.username = username
                this.password = BcryptUtil.bcryptHash(password)
                this.role = role
            }

            user.persist()
        }

        fun deleteByUsername(username: String) {
            delete("username", username)
        }
    }

    @Username
    lateinit var username: String

    @Password
    lateinit var password: String

    @Roles
    lateinit var role: String
}