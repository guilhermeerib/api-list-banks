package com.revgas.estagio.config;

import com.revgas.estagio.models.Banco;
import com.revgas.estagio.services.BancoService;
import com.revgas.estagio.utils.ReadXlsFileAndGetBancos;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class InitConfig {

    @Autowired
    private BancoService bancoService;

    @PostConstruct
    public void init() {
//        Ler arquivo Xls fornecido e armazenar uma Lista de bancos
        List<Banco> bancosXls = ReadXlsFileAndGetBancos.lerXlsRetornarBanco();

        if (!bancosXls.isEmpty()){
            bancoService.inserirBancos(bancosXls) ;
        }
    }
}
