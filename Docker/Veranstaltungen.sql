-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mariadb:3306
-- Erstellungszeit: 17. Aug 2023 um 10:36
-- Server-Version: 10.5.22-MariaDB-1:10.5.22+maria~ubu2004
-- PHP-Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `SommerCamp`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Veranstaltungen`
--

CREATE TABLE `Veranstaltungen` (
  `veranstaltungs_id` int(11) NOT NULL,
  `datum` date NOT NULL,
  `ort` varchar(255) NOT NULL,
  `startzeit` time DEFAULT NULL,
  `endzeit` time NOT NULL,
  `workshop_id` int(11) NOT NULL,
  `spezialisierung` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `Veranstaltungen`
--

INSERT INTO `Veranstaltungen` (`veranstaltungs_id`, `datum`, `ort`, `startzeit`, `endzeit`, `workshop_id`, `spezialisierung`) VALUES
(1, '2023-08-15', 'Dresden', '12:48:06', '10:08:00', 7, 'Kristall ziehen'),
(6, '2024-08-03', 'Oberschule Kitzscher\r\n', '16:56:34', '05:00:00', 1, NULL),
(7, '2023-08-10', 'Oberschule Borna', '04:56:34', '00:00:00', 1, NULL),
(8, '2023-10-19', 'Oberschule Frohburg', '13:56:34', '00:00:00', 1, NULL),
(9, '2024-05-24', 'Oberschule Claußnitz\r\n', '09:34:34', '00:00:00', 1, NULL),
(12, '2024-04-17', 'Martin – Luther Gymnasium, Frankenberg\r\n', '09:18:34', '00:00:00', 1, NULL),
(13, '2024-07-18', 'Friedrich Rückert Grundschule, Plauen', '11:48:24', '21:46:00', 1, NULL);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `Veranstaltungen`
--
ALTER TABLE `Veranstaltungen`
  ADD PRIMARY KEY (`veranstaltungs_id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `Veranstaltungen`
--
ALTER TABLE `Veranstaltungen`
  MODIFY `veranstaltungs_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
