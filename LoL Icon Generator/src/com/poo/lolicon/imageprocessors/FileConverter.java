package com.poo.lolicon.imageprocessors;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.apache.commons.io.FilenameUtils;

public class FileConverter extends FileTransformer implements IFileTransformer {
	
	public FileConverter (String destination) {
		super(destination);
	}

	@Override
	public void rename(File file, String newFileName) {
		String newFileNameWithoutExtention = FilenameUtils.removeExtension(newFileName);
		String newFileNameExtention = FilenameUtils.getExtension(file.getName());
		
		String newFileFullPath = this.destination + "\\" + newFileNameWithoutExtention + "." + newFileNameExtention;
		
		Path newPath = Paths.get(newFileFullPath);

	}

}
