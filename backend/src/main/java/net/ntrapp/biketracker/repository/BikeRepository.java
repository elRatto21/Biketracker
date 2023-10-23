package net.ntrapp.biketracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.ntrapp.biketracker.model.Bike;

@Repository
public interface BikeRepository extends JpaRepository<Bike, Integer>{

}
