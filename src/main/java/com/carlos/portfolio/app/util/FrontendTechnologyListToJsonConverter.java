package com.carlos.portfolio.app.util;

import com.carlos.portfolio.app.datalayer.skills.FrontendTechnology;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.List;

@Converter
public class FrontendTechnologyListToJsonConverter implements AttributeConverter<List<FrontendTechnology>, String> {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(List<FrontendTechnology> attribute) {
        try {
            return objectMapper.writeValueAsString(attribute);
        } catch (Exception e) {
            throw new IllegalArgumentException("Error converting list of FrontendTechnology to JSON", e);
        }
    }

    @Override
    public List<FrontendTechnology> convertToEntityAttribute(String dbData) {
        try {
            return objectMapper.readValue(dbData, new TypeReference<List<FrontendTechnology>>() {});
        } catch (Exception e) {
            throw new IllegalArgumentException("Error converting JSON to list of FrontendTechnology", e);
        }
    }
}
