package com.carlos.portfolio.app.util;

import com.carlos.portfolio.app.datalayer.journey.Academic;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.List;

@Converter
public class AcademicListToJsonConverter implements AttributeConverter<List<Academic>, String> {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(List<Academic> attribute) {
        try {
            return objectMapper.writeValueAsString(attribute);
        } catch (Exception e) {
            throw new IllegalArgumentException("Error converting list of Academic to JSON", e);
        }
    }

    @Override
    public List<Academic> convertToEntityAttribute(String dbData) {
        try {
            return objectMapper.readValue(dbData, new TypeReference<List<Academic>>() {});
        } catch (Exception e) {
            throw new IllegalArgumentException("Error converting JSON to list of Academic", e);
        }
    }
}
