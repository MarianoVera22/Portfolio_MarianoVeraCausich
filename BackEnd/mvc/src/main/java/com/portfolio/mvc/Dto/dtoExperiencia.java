/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.mvc.Dto;

import javax.validation.constraints.NotBlank;

/**
 *
 * @author Mariano
 */
public class dtoExperiencia {
    @NotBlank
    private String nombreE;
    @NotBlank
    private String fechaE;
    @NotBlank
    private String descripcionE;
    @NotBlank
    private String lugarE;

    public dtoExperiencia() {
    }

    public dtoExperiencia(String nombreE, String descripcionE, String fechaE, String lugarE) {
        this.nombreE = nombreE;
        this.fechaE=fechaE;
        this.descripcionE = descripcionE;
        this.lugarE= lugarE;
    }

    public String getNombreE() {
        return nombreE;
    }

    public void setNombreE(String nombreE) {
        this.nombreE = nombreE;
    }

    public String getDescripcionE() {
        return descripcionE;
    }

    public void setDescripcionE(String descripcionE) {
        this.descripcionE = descripcionE;
    }

    public String getFechaE() {
        return fechaE;
    }

    public void setFechaE(String fechaE) {
        this.fechaE = fechaE;
    }

    public String getLugarE() {
        return lugarE;
    }

    public void setLugarE(String lugarE) {
        this.lugarE = lugarE;
    }

}
