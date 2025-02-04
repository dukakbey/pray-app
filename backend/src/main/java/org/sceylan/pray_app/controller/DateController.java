package org.sceylan.pray_app.controller;

import java.util.HashMap;
import java.util.Map;

import org.sceylan.pray_app.beans.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DateController {
    @PostMapping("/api/dates")
    public Map<String,String> getStartEnd(@RequestBody User request)
    {
        
        Map<String,String> response = new HashMap<>();  
        
        
        response.put("message",request.getName()+" için"+ " tarih kaydedildi: "+ request.getEndDate().getMonth()+"/"+request.getEndDate().getDayOfMonth()+"/"+request.getEndDate().getYear());
        return response;
  
    }
}
