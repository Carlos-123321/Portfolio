//package com.carlos.portfolio.app.securityConfig;
//
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class SecurityConfig implements WebMvcConfigurer {
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowedOrigins("https://carlos-portfolio-orcin.vercel.app")
//                .allowedMethods("GET", "POST", "PUT", "DELETE")
//                .allowCredentials(true)
//                .maxAge(3600);
//    }
//}

//package com.carlos.portfolio.app.securityConfig;
//
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.beans.factory.annotation.Value;
//
//@Configuration
//public class SecurityConfig implements WebMvcConfigurer {
//
//    @Value("${frontend.url}")
//    private String frontendUrl;
//
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        // Allow different origins based on the environment (local or production)
//        registry.addMapping("/**")
//                .allowedOrigins(frontendUrl)  // Dynamically use frontend URL from properties
//                .allowedMethods("GET", "POST", "PUT", "DELETE")
//                .allowCredentials(true)
//                .maxAge(3600);
//    }
//}

package com.carlos.portfolio.app.securityConfig;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Value;
import javax.annotation.PostConstruct;

@Configuration
public class SecurityConfig implements WebMvcConfigurer {

    @Value("${frontend.url}")
    private String frontendUrl;

    @PostConstruct
    public void init() {
        System.out.println("Frontend URL: " + frontendUrl);  // Debugging to check the value
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Allow different origins based on the environment (local or production)
        registry.addMapping("/**")
                .allowedOrigins(frontendUrl)  // Dynamically use frontend URL from properties
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowCredentials(true)
                .maxAge(3600);
    }
}


