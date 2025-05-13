package com.carlos.portfolio.app.util;

import com.carlos.portfolio.app.datalayer.hobby.Hobbies;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.List;

@Converter
public class HobbiesListToJsonConverter implements AttributeConverter<List<Hobbies>, String> {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(List<Hobbies> attribute) {
        try {
            return objectMapper.writeValueAsString(attribute);
        } catch (Exception e) {
            throw new IllegalArgumentException("Error converting list of Hobbies to JSON", e);
        }
    }

    @Override
    public List<Hobbies> convertToEntityAttribute(String dbData) {
        try {
            return objectMapper.readValue(dbData, new TypeReference<List<Hobbies>>() {});
        } catch (Exception e) {
            throw new IllegalArgumentException("Error converting JSON to list of Hobbies", e);
        }
    }
}
