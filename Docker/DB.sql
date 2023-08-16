-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mariadb:3306
-- Erstellungszeit: 16. Aug 2023 um 11:10
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
-- Tabellenstruktur für Tabelle `Nutzerdaten`
--

CREATE TABLE `Nutzerdaten` (
  `user_id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `passwort` int(11) NOT NULL,
  `rollen_id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `tel_number` int(11) DEFAULT NULL,
  `stellenname` varchar(255) DEFAULT NULL,
  `unternehmen` varchar(255) DEFAULT NULL,
  `anrede` varchar(20) DEFAULT NULL,
  `beschreibung` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `Nutzerdaten`
--

INSERT INTO `Nutzerdaten` (`user_id`, `firstname`, `lastname`, `passwort`, `rollen_id`, `email`, `tel_number`, `stellenname`, `unternehmen`, `anrede`, `beschreibung`) VALUES
(1, 'ä', 'ä', 1, 1, '1', 1, '1', '1', '1', '1'),
(2, 'k', 'k', 40404, 1, 'vfopdfvkodfk', 204958328, 'xkemfkj', 'dkdekfk', ' ckfvkc k', 'cvkmdfk kcf'),
(3, 'ä', 'l', 1, 1, 'aa', 11, 'hgt', 'rr', 'ff', 'fgrg'),
(4, 'vdfgdfg', 'rgeg', 4545, 2, 'ferewr', 4534535, 'dghegrg', 'rgergeg', 'ergeg', 'ergergerg'),
(5, 'hans', 'heinrich', 4545, 2, 'ferewr', 4534535, 'dghegrg', 'rgergeg', 'ergeg', 'ergergerg');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Rollen`
--

CREATE TABLE `Rollen` (
  `rollen_id` int(11) NOT NULL,
  `rollen_name` varchar(255) NOT NULL,
  `acc_le` varchar(1) NOT NULL,
  `acc_sc` varchar(1) NOT NULL,
  `acc_loe` varchar(1) NOT NULL,
  `pro_le` varchar(1) NOT NULL,
  `pro_sc` varchar(1) NOT NULL,
  `pro_loe` varchar(1) NOT NULL,
  `ter_le` varchar(1) NOT NULL,
  `ter_sc` varchar(1) NOT NULL,
  `ter_loe` varchar(1) NOT NULL,
  `buc_le` varchar(1) NOT NULL,
  `buc_sc` varchar(1) NOT NULL,
  `buc_loe` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `Rollen`
--

INSERT INTO `Rollen` (`rollen_id`, `rollen_name`, `acc_le`, `acc_sc`, `acc_loe`, `pro_le`, `pro_sc`, `pro_loe`, `ter_le`, `ter_sc`, `ter_loe`, `buc_le`, `buc_sc`, `buc_loe`) VALUES
(1, 'admin', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'),
(2, 'coordinator', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Teilnehmer`
--

CREATE TABLE `Teilnehmer` (
  `user_id` int(11) NOT NULL,
  `veranstaltungs_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Veranstaltungen`
--

CREATE TABLE `Veranstaltungen` (
  `veranstaltungs_id` int(11) NOT NULL,
  `datum` date NOT NULL,
  `ort` varchar(255) NOT NULL,
  `start_zeit` time DEFAULT NULL,
  `workshop_id` int(11) NOT NULL,
  `spezialisierung` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `Veranstaltungen`
--

INSERT INTO `Veranstaltungen` (`veranstaltungs_id`, `datum`, `ort`, `start_zeit`, `workshop_id`, `spezialisierung`) VALUES
(1, '2023-08-15', 'Dresden', '12:48:06', 7, 'Kristall ziehen'),
(6, '2024-08-03', 'Oberschule Kitzscher\r\n', NULL, 1, NULL),
(7, '2023-08-10', 'Oberschule Borna', NULL, 1, NULL),
(8, '2023-10-19', 'Oberschule Frohburg', NULL, 1, NULL),
(9, '2024-05-24', 'Oberschule Claußnitz\r\n', NULL, 1, NULL),
(12, '2024-04-17', 'Martin – Luther Gymnasium, Frankenberg\r\n', NULL, 1, NULL),
(13, '2024-07-18', 'Friedrich Rückert Grundschule, Plauen', NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Workshop`
--

CREATE TABLE `Workshop` (
  `workshop_id` int(11) NOT NULL,
  `titel` varchar(255) NOT NULL,
  `beschreibung` text NOT NULL,
  `dauer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `Workshop`
--

INSERT INTO `Workshop` (`workshop_id`, `titel`, `beschreibung`, `dauer`) VALUES
(4, 'elek. Pruefung', 'elek. Pruefung', 6),
(5, 'Kristall ziehen', 'Kristall ziehen', 8),
(6, 'Reinigen', 'Reinigen', 6),
(7, 'Metall/Gasabscheidung', 'Metall/Gasabscheidung', 4),
(12, 'Strukturierung', 'Strukturierung', 8);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `Workshop`
--
ALTER TABLE `Workshop`
  ADD PRIMARY KEY (`workshop_id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `Workshop`
--
ALTER TABLE `Workshop`
  MODIFY `workshop_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
