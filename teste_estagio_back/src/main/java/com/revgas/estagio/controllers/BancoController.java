package com.revgas.estagio.controllers;

import com.revgas.estagio.models.Banco;
import com.revgas.estagio.services.BancoService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/banco")
public class BancoController {
    @Autowired
    private BancoService bancoService;

    @CrossOrigin(origins = "*")
    @GetMapping(value = "todos")
    public ResponseEntity<List<Banco>> getAllBancos() {
        try {
            List<Banco> bancos = bancoService.findAll();
            return ResponseEntity.ok().body(bancos);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/{idBanco}")
    public ResponseEntity<?> findByIdBanco(@PathVariable Long idBanco) {
        //Recebe idBanco do path e passa como parâmentro de busca
        try {
            Banco banco = bancoService.findByIdBanco(idBanco);
            return ResponseEntity.ok().body(banco);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}















