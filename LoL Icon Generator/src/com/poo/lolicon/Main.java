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

		FileFinder fileFinder = new FileFinder(s + "/images");
		FileRenamer fileRenamer = new FileRenamer(Paths.get("dist").toString());

		/*extraction(Paths.get("images").toString(), s + "/json.txt", Paths.get("dist").toString(), "data", newObjects -> {
			System.out.println(newObjects[1] + ": " + newObjects[0]);
			findAndRename(fileFinder, fileRenamer, newObjects);
		}, "name", "id");*/
		
		extraction(Paths.get("champimages").toString(), s + "/champjson.txt", Paths.get("champdist").toString(), "data", newObjects -> {
			System.out.println(newObjects[1] + ": " + newObjects[0]);
			findAndRename(fileFinder, fileRenamer, newObjects);
		}, "name", "id");
	}

	private static void extraction(String pathToImages, String pathToJson, String pathToDist, String jsonRoot, ObjectExtractCallback callback, String... fields) throws FileNotFoundException, IOException, ParseException {
		IJSONReader reader = new JSONReader(pathToJson);
		List<Object[]> objects = reader.readJSONArray(jsonRoot, fields);

		for (int i = 0; i < objects.size(); i++) {
			callback.run(objects.get(i));
		}
	}

	private static void findAndRename(FileFinder fileFinder, FileRenamer fileRenamer, Object[] objects) {
		File[] files = fileFinder.search(ItemFormatter.replaceUnderscoreWithSpace((String) objects[0]));
		for (int i = 0; i < files.length; i++) {
			fileRenamer.rename(files[i], Long.toString((long) objects[1]));
		}

	}
}
