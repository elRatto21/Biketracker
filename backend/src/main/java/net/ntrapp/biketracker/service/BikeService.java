package net.ntrapp.biketracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.ntrapp.biketracker.model.Bike;
import net.ntrapp.biketracker.repository.BikeRepository;

@Service
public class BikeService {
	
	@Autowired
	BikeRepository bikeRepo;
	
	public List<Bike> getAll() {
		return this.bikeRepo.findAll();
	}
	
	public Bike getById(int bikeId) {
		return this.bikeRepo.findById(bikeId).orElseThrow();
	}
	
	public Bike create(Bike bike) {
		return this.bikeRepo.save(bike);
	}

}
