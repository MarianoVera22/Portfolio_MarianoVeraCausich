package com.portfolio.mvc.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Size(min=1, max=50, message="Minimo 1 caracter, maximo 50 caracteres")
    private String nombre;
    
    @NotNull
    @Size(min=1, max=50, message="Minimo 1 caracter, maximo 50 caracteres")
    private String apellido;
    
    @Size(min=1, max=1000, message="Minimo 1 caracter, maximo 1000 caracteres")
    private String img;

}
