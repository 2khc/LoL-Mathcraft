package com.poo.lolicon;

import java.io.FileReader;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Iterator;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class Main {

	public static void main(String[] args) {
		JSONParser parser = new JSONParser();
		 
        try {
        	Path currentRelativePath = Paths.get("");
        	String s = currentRelativePath.toAbsolutePath().toString();
            Object obj = parser.parse(new FileReader(s + "/json.txt"));
 
            JSONObject jsonObject = (JSONObject) obj;
 
            String name = (String) jsonObject.get("name");
            String author = (String) jsonObject.get("Author");
            JSONArray companyList = (JSONArray) jsonObject.get("data");
 
            System.out.println("Name: " + name);
            System.out.println("Author: " + author);
            System.out.println("\nCompany List:" + companyList);
            Iterator<JSONObject> iterator = companyList.iterator();
            while (iterator.hasNext()) {
                //System.out.println(iterator.next());
            	//System.out.println(iterator.next().getName());
            	System.out.println((String) iterator.next().get("name"));
            }
 
        } catch (Exception e) {
            e.printStackTrace();
        }
	}
}
