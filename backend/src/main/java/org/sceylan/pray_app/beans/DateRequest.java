package org.sceylan.pray_app.beans;

import java.time.LocalDate;

public class DateRequest {
    private LocalDate startDate;
    private LocalDate endDate;

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
}