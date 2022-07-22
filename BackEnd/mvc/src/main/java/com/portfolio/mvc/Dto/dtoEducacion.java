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

public class dtoEducacion {
    @NotBlank
    private String nombreEd;
    @NotBlank
    private String fechaEd;
    @NotBlank
    private String lugarEd;
    @NotBlank
    private String descripcionEd;

    public dtoEducacion() {
    }

    public dtoEducacion(String nombreEd, String fechaEd, String descripcionEd, String lugarEd) {
        this.nombreEd = nombreEd;
        this.fechaEd = fechaEd;
        this.lugarEd= lugarEd;
        this.descripcionEd = descripcionEd;
    }

    public String getLugarEd() {
        return lugarEd;
    }

    public void setLugarEd(String lugarEd) {
        this.lugarEd = lugarEd;
    }

    public String getNombreEd() {
        return nombreEd;
    }

    public void setNombreEd(String nombreEd) {
        this.nombreEd = nombreEd;
    }

    public String getFechaEd() {
        return fechaEd;
    }

    public void setFechaEd(String fechaEd) {
        this.fechaEd = fechaEd;
    }

    public String getDescripcionEd() {
        return descripcionEd;
    }

    public void setDescripcionEd(String descripcionEd) {
        this.descripcionEd = descripcionEd;
    }
    
    
}
