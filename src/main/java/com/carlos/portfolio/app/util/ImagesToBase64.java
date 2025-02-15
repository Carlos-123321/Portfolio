//package com.carlos.portfolio.app.util;
//
//import java.io.File;
//import java.io.FileInputStream;
//import java.io.IOException;
//import java.util.Base64;
//import java.util.List;
//import java.util.ArrayList;
//
//public class ImagesToBase64 {
//
//    public static String encodeImageToBase64(String imagePath) throws IOException {
//        File file = new File(imagePath);
//        FileInputStream fis = new FileInputStream(file);
//        byte[] imageBytes = new byte[(int) file.length()];
//        fis.read(imageBytes);
//        fis.close();
//        return Base64.getEncoder().encodeToString(imageBytes);
//    }
//
//    public static void main(String[] args) {
//
//        List<String> imagePaths = new ArrayList<>();
//        imagePaths.add("C:/images/casa-control.jpg");
//        imagePaths.add("C:/images/resume-builder.jpg");
//        imagePaths.add("C:/images/noble-nests.jpg");
//
//        for (String imagePath : imagePaths) {
//            try {
//                String base64Image = encodeImageToBase64(imagePath);
//                System.out.println("Base64 String for " + imagePath + ":");
//                System.out.println(base64Image);
//                System.out.println();
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//        }
//    }
//}
