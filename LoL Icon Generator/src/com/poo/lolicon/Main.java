package com.poo.lolicon;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.json.simple.parser.ParseException;

public class Main {

	public static void main(String[] args) throws FileNotFoundException, IOException, ParseException {
    	Path currentRelativePath = Paths.get("");
    	String s = currentRelativePath.toAbsolutePath().toString();
		IJSONReader reader = new JSONReader(s + "/json.txt");
		List<Object[]> objects = reader.readJSONArray("data", "name", "id");
		
		for (int i = 0; i < objects.size(); i++) {
			System.out.println(objects.get(i)[1]);
		}
	}
}
