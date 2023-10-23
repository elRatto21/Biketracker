package net.ntrapp.biketracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import net.ntrapp.biketracker.model.Bike;
import net.ntrapp.biketracker.service.BikeService;

@CrossOrigin("*")
@Controller
@RequestMapping("/api/bike")
public class BikeController {

	@Autowired
	BikeService bikeService;

	@GetMapping()
	public ResponseEntity<?> getBike(@RequestParam(name = "bikeId", required = false) String bikeId) {
		if (bikeId == null) {
			return new ResponseEntity<>(this.bikeService.getAll(), HttpStatus.OK);
		}
		return new ResponseEntity<>(this.bikeService.getById(Integer.parseInt(bikeId)), HttpStatus.OK);
	}

	@PostMapping()
	public ResponseEntity<?> createBike(@RequestBody Bike bike) {
		return new ResponseEntity<>(this.bikeService.create(bike), HttpStatus.CREATED);
	}

}
