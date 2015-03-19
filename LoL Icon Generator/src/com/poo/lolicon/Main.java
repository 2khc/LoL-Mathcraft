package com.poo.lolicon;

import java.io.File;
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
		FileFinder fileFinder = new FileFinder(s + "/images");
		FileRenamer fileRenamer = new FileRenamer(Paths.get("dist"));

		for (int i = 0; i < objects.size(); i++) {
			System.out.println(objects.get(i)[1] + ": " + objects.get(i)[0]);
			findAndRename(fileFinder, fileRenamer, objects.get(i));
		}
	}
	
	private static String formatItemName(String itemName) {
		return itemName.replace(' ', '_');
	}
	
	private static void findAndRename(FileFinder fileFinder, FileRenamer fileRenamer, Object[] objects) {
		File[] files = fileFinder.search(formatItemName((String)objects[0]));
		for (int i = 0; i < files.length; i++) {
			fileRenamer.rename(files[i], Long.toString((long)objects[1]));
		}

	}
}
