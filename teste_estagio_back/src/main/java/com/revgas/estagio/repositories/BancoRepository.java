package com.revgas.estagio.repositories;

import com.revgas.estagio.models.Banco;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BancoRepository extends JpaRepository<Banco,Long>{


}
