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

	private String destination;

	public FileRenamer(String destination) {
		this.destination = destination;
	}

	public void rename(File file, String newFileName) {
		String fileFolder = file.getParentFile().getParent() + "\\" + this.destination;
		
		String newFileNameWithoutExtention = FilenameUtils.removeExtension(newFileName);
		String newFileNameExtention = FilenameUtils.getExtension(file.getName());
		
		String newFileFullPath = fileFolder + "\\" + newFileNameWithoutExtention + "." + newFileNameExtention;


		this.clearDestination(fileFolder);
		
		Path newPath = Paths.get(newFileFullPath);
		System.out.println(file.toPath());
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
