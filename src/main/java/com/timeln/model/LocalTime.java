package com.timeln.model;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class LocalTime {
    private LocalDateTime localDateTimeNow = LocalDateTime.now();
    private DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");

    public String dateAndTimeFormated(String dateFormated) {
        return dateFormated = timeFormatter.format(localDateTimeNow);
    }
}
