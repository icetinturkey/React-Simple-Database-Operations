-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1:3306
-- Üretim Zamanı: 11 Kas 2022, 18:22:39
-- Sunucu sürümü: 8.0.27
-- PHP Sürümü: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `vadiinfo_db`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `scandi`
--

DROP TABLE IF EXISTS `scandi`;
CREATE TABLE IF NOT EXISTS `scandi` (
  `sku` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `data` varchar(255) NOT NULL,
  UNIQUE KEY `sku` (`sku`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Tablo döküm verisi `scandi`
--

INSERT INTO `scandi` (`sku`, `name`, `price`, `data`) VALUES
('GGWP0007', 'War and Peace', '20.00', '{\"Weight\": \"2KG\"}'),
('GGWP0008', 'War and Peace', '20.00', '{\"Weight\": \"2KG\"}'),
('GGWP0009', 'War and Peace', '20.00', '{\"Weight\": \"2KG\"}'),
('GGWP0010', 'War and Peace', '20.00', '{\"Weight\": \"2KG\"}'),
('JVC200123', 'Acme DISC', '20.00', '{\"Size\": \"700 MB\"}'),
('JVC200124', 'Acme DISC', '1.00', '{\"Size\": \"700 MB\"}'),
('JVC200125', 'Acme DISC', '1.00', '{\"Size\": \"700 MB\"}'),
('JVC200126', 'Acme DISC', '1.00', '{\"Size\": \"700 MB\"}'),
('TR120555', 'Chair', '40.00', '{\"Dimension\": \"24x45x15\"}'),
('TR120556', 'Chair', '40.00', '{\"Dimension\": \"24x45x15\"}'),
('TR120557', 'Chair', '40.00', '{\"Dimension\": \"24x45x15\"}'),
('TR120558', 'Chair', '40.00', '{\"Dimension\": \"24x45x15\"}');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
