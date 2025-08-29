package com.FunctionalInterfaces;
import java.util.Optional;
import java.util.function.Supplier;
import java.lang.Math;



public class LazyConfigurationLoader {

	



	public static void main(String[] args) {
		Supplier<Optional<String>> loadConfig =()->{
			String url="http://localhost:8000";
			double randomNumber=Math.random();
			System.out.println("random generated! "+(randomNumber<0.5));
			if(randomNumber<0.5) {
				return Optional.of(url);
			}
			return Optional.ofNullable(null);
		};
		
		Optional<String> config=loadConfig.get();
		if(config.isPresent()) {
			System.out.println("server started on port no 8000 url: "+config);
			
		}
		else{
			System.out.println("server is not started!");
		}
	
	}

}
