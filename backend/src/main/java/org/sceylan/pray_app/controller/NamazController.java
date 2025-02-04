package org.sceylan.pray_app.controller;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.Map;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/namaz")
public class NamazController {

    @GetMapping("/missed")
    public ResponseEntity<Map<String, Object>> getMissedPrayers(
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate,
            @RequestParam("missedCount") int missedCount) {

        long totalDays = ChronoUnit.DAYS.between(startDate, endDate) + 1;
        long totalPrayers = totalDays * 5;
        long missedPrayers = missedCount;

        Map<String, Object> response = new HashMap<>();
        response.put("totalDays", totalDays);
        response.put("totalPrayers", totalPrayers);
        response.put("missedPrayers", missedPrayers);
        response.put("completedPrayers", totalPrayers - missedPrayers);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/missed-per-prayer")
    public ResponseEntity<Map<String, Integer>> getMissedPrayersPerTime() {
        Map<String, Integer> missedPrayers = new HashMap<>();
        missedPrayers.put("Sabah", 4);
        missedPrayers.put("Öğle", 8);
        missedPrayers.put("İkindi", 4);
        missedPrayers.put("Akşam", 3);
        missedPrayers.put("Yatsı", 25);
        
        return ResponseEntity.ok(missedPrayers);
    }

}
