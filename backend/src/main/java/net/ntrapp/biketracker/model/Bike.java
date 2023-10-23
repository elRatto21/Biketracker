package net.ntrapp.biketracker.model;

import java.util.List;

import jakarta.annotation.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "bike")
public class Bike {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int bikeId;
	
	private String manufacturer;
	
	private String model;
	
	private int horsepower;
	
	private int weight;
	
	private int mileage;
	
	@Nullable
	@OneToMany(mappedBy = "bike")
	private List<Maintenance> maintenanceList;

}
