package com.poo.lolicon;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;

public class FileRenamer {

	private Path destination;

	public FileRenamer(Path destination) {
		this.destination = destination;
		this.clearDestination(destination.toString());
	}

	public void rename(File file, String newFileName) {
		String fileFolder = this.destination.toString();
		
		String newFileNameWithoutExtention = FilenameUtils.removeExtension(newFileName);
		String newFileNameExtention = FilenameUtils.getExtension(file.getName());
		
		String newFileFullPath = fileFolder + "\\" + newFileNameWithoutExtention + "." + newFileNameExtention;

		
		Path newPath = Paths.get(newFileFullPath);
		System.out.println("Renaming: " + file.toPath());
		try {
			Files.copy(file.toPath(), newPath,  StandardCopyOption.REPLACE_EXISTING);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	private void clearDestination(String fileDestination) {
		File file = new File(fileDestination);
		try {
			FileUtils.deleteDirectory(file);
			FileUtils.forceMkdir(file);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
