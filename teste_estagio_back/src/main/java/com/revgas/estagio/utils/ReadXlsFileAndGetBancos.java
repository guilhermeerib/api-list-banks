package com.revgas.estagio.utils;

import com.revgas.estagio.models.Banco;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.util.Beta;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.io.FileInputStream;
import java.io.InputStream;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


@Component
public class ReadXlsFileAndGetBancos {
    /*Esse Método irá ler o arquivo Xls fornecido para o teste e retornar a lista de bancos contida nele
     */
    public static List<Banco> lerXlsRetornarBanco() {

        List<Banco> bancos = new ArrayList<>();
        String pathFile = "src/main/resources/bancos.xls";

        try (InputStream arquivo = new FileInputStream(pathFile)) {
            Workbook workbook = new HSSFWorkbook(arquivo);

            Sheet sheet = workbook.getSheetAt(0);


            Iterator<Row> rowIterator = sheet.iterator();
            while (rowIterator.hasNext()) {
                Row row = rowIterator.next();
                if (row.getRowNum() == 0) continue;

                Integer id = (int) row.getCell(0).getNumericCellValue();
                String nome = row.getCell(1).getStringCellValue();

                bancos.add(new Banco(id, nome));
            }

            workbook.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return bancos;
    }
}

