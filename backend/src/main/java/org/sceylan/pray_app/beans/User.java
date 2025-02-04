package org.sceylan.pray_app.beans;

import java.time.LocalDate;

public class User {
    private LocalDate startDate;
    private LocalDate endDate;
    private String name;
    private Integer sabah;
    private Integer ikindi;
    private Integer oglen;
    private Integer aksam;
    private Integer yatsi;


    public User(LocalDate s,LocalDate e,String n)
    {
        startDate = s;
        endDate = e;
        name = n;
    }
    // Getter ve Setter
    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
