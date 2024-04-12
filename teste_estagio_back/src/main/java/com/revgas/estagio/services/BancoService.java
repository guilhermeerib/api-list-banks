package com.revgas.estagio.services;

import com.revgas.estagio.models.Banco;
import com.revgas.estagio.repositories.BancoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BancoService {
    @Autowired
    private BancoRepository bancoRepository;

    public List<Banco> findAll() {
        List<Banco> bancoList = bancoRepository.findAll();
        return bancoList;
    }

    public Banco findByIdBanco(Long idBanco) {
        Banco banco = bancoRepository.getReferenceById(idBanco);
        return banco;
    }

    @Transactional
    public void inserirBancos(List<Banco> bancos) {
        for (Banco banco : bancos) {
            if (!bancoRepository.existsById(Long.valueOf(banco.getId()))) {
                bancoRepository.save(banco);
            }
        }
    }
}
