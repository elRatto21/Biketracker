package net.ntrapp.biketracker.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "maintenance")
public class Maintenance {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int maintId;
	
	private String title;
	
	private String date;
	
	private int price;
	
	@ManyToOne
	@JoinColumn(name = "bikeId", nullable = false)
	private Bike bike;
}
