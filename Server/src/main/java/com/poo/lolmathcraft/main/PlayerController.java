package com.poo.lolmathcraft.main;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

public class PlayerController {
	private final AtomicLong counter = new AtomicLong();
	
	@RequestMapping("/build")
	public Player generatePlayer(
			@RequestParam ChampionData championData){
		//Generate the player here!
			return new Player();
	}
}
