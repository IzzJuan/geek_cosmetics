/*
 Navicat Premium Data Transfer

 Source Server         : AWS
 Source Server Type    : MySQL
 Source Server Version : 80020
 Source Host           : database-instance.c3jkemwvwcuj.us-east-2.rds.amazonaws.com:3306
 Source Schema         : geek-cosmetics

 Target Server Type    : MySQL
 Target Server Version : 80020
 File Encoding         : 65001

 Date: 16/04/2021 16:25:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `product_description` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `product_image` varchar(350) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `product_price` int NOT NULL,
  `product_remaining` int NOT NULL,
  `product_amount` int NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, 'Foam', NULL, 'https://storage.googleapis.com/gcs-bucket-geek/Foam.jpg', 25000, 523, 1);
INSERT INTO `products` VALUES (2, 'Carbón Activado WIKI', NULL, 'https://storage.googleapis.com/gcs-bucket-geek/Carb%C3%B3n%20Activado%20WIKI.jpg', 18000, 300, 1);
INSERT INTO `products` VALUES (3, 'DepilYA', NULL, 'https://storage.googleapis.com/gcs-bucket-geek/DepilYA.jpg', 10000, 1000, 1);
INSERT INTO `products` VALUES (4, 'Mantequilla Corporal (durazno)', NULL, 'https://storage.googleapis.com/gcs-bucket-geek/Mantequilla%20Corporal%20(durazno).jpg', 25000, 1000, 1);
INSERT INTO `products` VALUES (5, 'Bronceador', NULL, 'https://storage.googleapis.com/gcs-bucket-geek/Bronceador.jpg', 40000, 250, 1);
INSERT INTO `products` VALUES (6, 'Antiestrias', NULL, 'https://storage.googleapis.com/gcs-bucket-geek/Antiestrias.jpg', 35000, 300, 1);
INSERT INTO `products` VALUES (7, 'Despigmentante Intimo', NULL, 'https://storage.googleapis.com/gcs-bucket-geek/Despigmentante%20Intimo.jpg', 40000, 500, 1);
INSERT INTO `products` VALUES (8, 'Despigmentante Facial', NULL, 'https://storage.googleapis.com/gcs-bucket-geek/Despigmentante%20Facial.jpg', 35000, 365, 1);
INSERT INTO `products` VALUES (9, 'Dermatónico', NULL, 'https://storage.googleapis.com/gcs-bucket-geek/Dermat%C3%B3nico.jpg', 40000, 500, 1);
INSERT INTO `products` VALUES (10, 'Mantequilla Corporal (frutos rojos)', NULL, 'https://storage.googleapis.com/gcs-bucket-geek/Mantequilla%20Corporal%20(frutos%20rojos).jpg', 25000, 2000, 1);
INSERT INTO `products` VALUES (11, 'Mantequilla Corporal (naranja)', NULL, 'https://storage.googleapis.com/gcs-bucket-geek/Mantequilla%20Corporal%20(naranja).jpg', 25000, 700, 1);

-- ----------------------------
-- Table structure for userInfo
-- ----------------------------
DROP TABLE IF EXISTS `userInfo`;
CREATE TABLE `userInfo`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_lastname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_pass` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_adress` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of userInfo
-- ----------------------------
INSERT INTO `userInfo` VALUES (1, 'Juan Jose', 'Garcia', 'juangarciavxx@gmail.com', '$2b$10$miyt.DwLihoKRZl6C1PLgOG5qpAq.mwPx.2DPkbnaUF70m9OUvgvK', 'Crra79c');
INSERT INTO `userInfo` VALUES (2, 'Juan Jose', 'Garcia', 'juan@gmail.com', '$2b$10$o.P2CWTVSDO5rAqsSKNipOiqZjXhUsTn9Q02VDa0QBW048EjraISG', 'Crra79c');
INSERT INTO `userInfo` VALUES (3, 'Jacobo', 'Uribe', 'jaco@gmail.com', '$2b$10$5JosjKSdcSJ0tmQFYOpKOugcWW88iOfs6K0Py0WbBXmLDZcu7bgdS', 'Cra42');
INSERT INTO `userInfo` VALUES (4, 'Juan', 'Garcia', 'juangarciavxxx@gmail.com', '$2b$10$0TZMjvs7YFJFtJnWnssHd.0kujGtf3PBcLdm6vP/li915rhu2HnG2', 'Cl. 9B Sur # 79A-101');
INSERT INTO `userInfo` VALUES (5, 'Luis Alejandro', ' Calvo Álvarez', 'Offztinger@gmail.com', '$2b$10$AiHtJHwoOkz.g1KddcRawexBlVEQOxDKQENM0RmmyNbLfjxa/TbLq', 'Cll 21 #23a-50');
INSERT INTO `userInfo` VALUES (7, 'pepito', 'perez', 'oscarmesa.elpoli@gmail.com', '$2b$10$YyPjzl8GeH.B1pvalzRHfudO/XUIm2G1ltuZzlSjPGRRYX3XWCoFC', 'calle falsa 123');

-- ----------------------------
-- Table structure for userOrders
-- ----------------------------
DROP TABLE IF EXISTS `userOrders`;
CREATE TABLE `userOrders`  (
  `order_number` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `products` json NULL,
  `order_date` datetime NULL DEFAULT NULL,
  `id_user` int NULL DEFAULT NULL,
  `order_state` enum('en revision','enviado','recibido') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT 'en revision',
  PRIMARY KEY (`order_number`) USING BTREE,
  INDEX `fk_id_user`(`id_user`) USING BTREE,
  CONSTRAINT `fk_id_user` FOREIGN KEY (`id_user`) REFERENCES `userInfo` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of userOrders
-- ----------------------------
INSERT INTO `userOrders` VALUES ('8bopSmOVdY', '[{\"id\": 2, \"product_name\": \"Carbón Activado WIKI\", \"product_image\": \"https://storage.googleapis.com/gcs-bucket-geek/Carb%C3%B3n%20Activado%20WIKI.jpg\", \"product_price\": 18000, \"product_amount\": 1, \"product_remaining\": 300, \"product_description\": null}]', NULL, 2, 'en revision');
INSERT INTO `userOrders` VALUES ('gJS9R9dXkF', '[]', NULL, 2, 'en revision');
INSERT INTO `userOrders` VALUES ('H6fbw9P0ZM', '[{\"id\": 3, \"product_name\": \"DepilYA\", \"product_image\": \"https://storage.googleapis.com/gcs-bucket-geek/DepilYA.jpg\", \"product_price\": 10000, \"product_amount\": 1, \"product_remaining\": 1000, \"product_description\": null}, {\"id\": 5, \"product_name\": \"Bronceador\", \"product_image\": \"https://storage.googleapis.com/gcs-bucket-geek/Bronceador.jpg\", \"product_price\": 40000, \"product_amount\": 1, \"product_remaining\": 250, \"product_description\": null}]', NULL, 1, 'en revision');
INSERT INTO `userOrders` VALUES ('JDLXr0X6JX', '[{\"id\": 1, \"product_name\": \"Foam\", \"product_image\": \"https://storage.googleapis.com/gcs-bucket-geek/Foam.jpg\", \"product_price\": 25000, \"product_amount\": 1, \"product_remaining\": 523, \"product_description\": null}, {\"id\": 2, \"product_name\": \"Carbón Activado WIKI\", \"product_image\": \"https://storage.googleapis.com/gcs-bucket-geek/Carb%C3%B3n%20Activado%20WIKI.jpg\", \"product_price\": 18000, \"product_amount\": 1, \"product_remaining\": 300, \"product_description\": null}, {\"id\": 3, \"product_name\": \"DepilYA\", \"product_image\": \"https://storage.googleapis.com/gcs-bucket-geek/DepilYA.jpg\", \"product_price\": 10000, \"product_amount\": 1, \"product_remaining\": 1000, \"product_description\": null}]', NULL, 1, 'en revision');
INSERT INTO `userOrders` VALUES ('rBrPgVhN63', '[{\"id\": 1, \"product_name\": \"Foam\", \"product_image\": \"https://storage.googleapis.com/gcs-bucket-geek/Foam.jpg\", \"product_price\": 25000, \"product_amount\": 5, \"product_remaining\": 523, \"product_description\": null}, {\"id\": 2, \"product_name\": \"Carbón Activado WIKI\", \"product_image\": \"https://storage.googleapis.com/gcs-bucket-geek/Carb%C3%B3n%20Activado%20WIKI.jpg\", \"product_price\": 18000, \"product_amount\": 1, \"product_remaining\": 300, \"product_description\": null}, {\"id\": 4, \"product_name\": \"Mantequilla Corporal (durazno)\", \"product_image\": \"https://storage.googleapis.com/gcs-bucket-geek/Mantequilla%20Corporal%20(durazno).jpg\", \"product_price\": 25000, \"product_amount\": 4, \"product_remaining\": 1000, \"product_description\": null}, {\"id\": 3, \"product_name\": \"DepilYA\", \"product_image\": \"https://storage.googleapis.com/gcs-bucket-geek/DepilYA.jpg\", \"product_price\": 10000, \"product_amount\": 4, \"product_remaining\": 1000, \"product_description\": null}, {\"id\": 7, \"product_name\": \"Despigmentante Intimo\", \"product_image\": \"https://storage.googleapis.com/gcs-bucket-geek/Despigmentante%20Intimo.jpg\", \"product_price\": 40000, \"product_amount\": 2, \"product_remaining\": 500, \"product_description\": null}]', NULL, 7, 'en revision');
INSERT INTO `userOrders` VALUES ('YsLfZMsruT', '[]', NULL, 1, 'en revision');

SET FOREIGN_KEY_CHECKS = 1;
