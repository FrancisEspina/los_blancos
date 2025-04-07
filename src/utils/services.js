import { getMatches, getStandings } from "./api";

export const formatDate = (utcString) => {
  const date = new Date(utcString);

  // Format options
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
};

export const formatYear = (utcString) => {
  const date = new Date(utcString);

  // Format options
  const options = {
    year: "numeric",
    hour12: false,
  };

  return date.toLocaleString("en-US", options);
};

export const expiredDate = (matchDate, now) => {
  const match = new Date(matchDate);
  const today = new Date(now);

  if (match > today) {
    return true;
  } else {
    return false;
  }
};

export const fetchStandings = async (division) => {
  let standings = "";
  let fetchedStandingData = null;
  try {
    standings = JSON.parse(sessionStorage.getItem(division));
  } catch (error) {
    standings = null;
  }

  if (standings && standings != undefined) {
    console.log("DATA IS UP TO DATE");
    fetchedStandingData = JSON.parse(sessionStorage.getItem(division));
    return fetchedStandingData;
  }
  console.log("DATA UPDATED ");
  fetchedStandingData = await getStandings(division);
  sessionStorage.setItem(division, JSON.stringify(fetchedStandingData));
  return fetchedStandingData;
};

export const ordinalNum = (n) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const fetchMatches = async (
  category = "SCHEDULED",
  now,
  need_restart = false
) => {
  let matches = "";
  try {
    matches = JSON.parse(sessionStorage.getItem(category));
  } catch (error) {
    matches = null;
  }

  if (matches && !need_restart && matches != undefined) {
    if (expiredDate(matches[0].utcDate, now)) {
      console.log("DATA IS UP TO DATE");
      let fetchedMatches = JSON.parse(sessionStorage.getItem(category));
      return fetchedMatches;
    }
  }
  console.log("UPDATED MATCHES");
  console.log(category);
  let fetchedMatches = await getMatches(category.toUpperCase());
  sessionStorage.setItem(category, JSON.stringify(fetchedMatches));
  return fetchedMatches;
};

export const leagueMapper = (code) => {
  let league = "";
  switch (code) {
    case "QCAF":
      league = "WC Qualification CAF";
      break;
    case "ASL":
      league = "Liga Profesional";
      break;
    case "QAFC":
      league = "WC Qualification AFC";
      break;
    case "AAL":
      league = "A League";
      break;
    case "APL":
      league = "Playoffs 1/2";
      break;
    case "ABL":
      league = "Bundesliga";
      break;
    case "BJPP":
      league = "Playoffs";
      break;
    case "BJL":
      league = "Jupiler Pro League";
      break;
    case "BSB":
      league = "Campeonato Brasileiro Série B";
      break;
    case "BSA":
      league = "Campeonato Brasileiro Série A";
      break;
    case "CPD":
      league = "Primera División";
      break;
    case "CSL":
      league = "Chinese Super League";
      break;
    case "CLP":
      league = "Liga Postobón";
      break;
    case "PRVA":
      league = "Prva Liga";
      break;
    case "DELP":
      league = "Euro League - Playoff";
      break;
    case "DSU":
      league = "Superliga";
      break;
    case "ELC":
      league = "Championship";
      break;
    case "PL":
      league = "Premier League";
      break;
    case "FLC":
      league = "Football League Cup";
      break;
    case "EL1":
      league = "League One";
      break;
    case "ENL":
      league = "National League";
      break;
    case "EL2":
      league = "League Two";
      break;
    case "FAC":
      league = "FA Cup";
      break;
    case "COM":
      league = "FA Community Shield";
      break;
    case "EC":
      league = "European Championship";
      break;
    case "EL":
      league = "UEFA Europa League";
      break;
    case "UCL":
      league = "UEFA Conference League";
      break;
    case "CL":
      league = "UEFA Champions League";
      break;
    case "ESC":
      league = "Supercup";
      break;
    case "QUFA":
      league = "WC Qualification UEFA";
      break;
    case "VEI":
      league = "Veikkausliiga";
      break;
    case "FL2":
      league = "Ligue 2";
      break;
    case "FPL":
      league = "Playoffs 1/2";
      break;
    case "FL1":
      league = "Ligue 1";
      break;
    case "REG":
      league = "Regionalliga";
      break;
    case "GSC":
      league = "DFL Super Cup";
      break;
    case "BL3":
      league = "3. Bundesliga";
      break;
    case "BLREL":
      league = "Relegation";
      break;
    case "BL1":
      league = "Bundesliga";
      break;
    case "BL2":
      league = "2. Bundesliga";
      break;
    case "DFB":
      league = "DFB-Pokal";
      break;
    case "GSL":
      league = "Super League";
      break;
    case "HNB":
      league = "NB I";
      break;
    case "ILH":
      league = "Ligat ha’Al";
      break;
    case "SA":
      league = "Serie A";
      break;
    case "SB":
      league = "Serie B";
      break;
    case "CIT":
      league = "Coppa Italia";
      break;
    case "ISC":
      league = "Serie C";
      break;
    case "IPL":
      league = "Playoffs 1/2";
      break;
    case "JJL":
      league = "J. League";
      break;
    case "LMX":
      league = "Liga MX";
      break;
    case "KNV":
      league = "KNVB Beker";
      break;
    case "DED":
      league = "Eredivisie";
      break;
    case "DJL":
      league = "Eerste Divisie";
      break;
    case "TIP":
      league = "Tippeligaen";
      break;
    case "QOFC":
      league = "WC Qualification OFC";
      break;
    case "PPD":
      league = "Primera División";
      break;
    case "PPL":
      league = "Primeira Liga";
      break;
    case "RL1":
      league = "Liga I";
      break;
    case "RFPL":
      league = "RFPL";
      break;
    case "SPL":
      league = "Premier League";
      break;
    case "CLI":
      league = "Copa Libertadores";
      break;
    case "CA":
      league = "Copa America";
      break;
    case "QCBL":
      league = "WC Qualification CONMEBOL";
      break;
    case "SD":
      league = "Segunda División";
      break;
    case "CDR":
      league = "Copa del Rey";
      break;
    case "PD":
      league = "La Liga";
      break;
    case "ALL":
      league = "Allsvenskan";
      break;
    case "SSL":
      league = "Super League";
      break;
    case "TSL":
      league = "Süper Liga";
      break;
    case "UPL":
      league = "Premier Liha";
      break;
    case "MLS":
      league = "MLS";
      break;
    case "SUCU":
      league = "Supercopa Uruguaya";
      break;
    case "OLY":
      league = "Summer Olympics";
      break;
    case "WC":
      league = "FIFA World Cup";
      break;
    case "QCCF":
      league = "WC Qualification CONCACAF";
      break;
    default:
      league = "Unknown League";
  }
  return league;
};

export const stageMapper = (stage) => {
  let stageName = "";
  switch (stage) {
    case "FINAL":
      stageName = "Final";
      break;
    case "THIRD_PLACE":
      stageName = "Third Place";
      break;
    case "SEMI_FINALS":
      stageName = "Semi Finals";
      break;
    case "QUARTER_FINALS":
      stageName = "Quarter Finals";
      break;
    case "LAST_16":
      stageName = "Last 16";
      break;
    case "LAST_32":
      stageName = "Last 32";
      break;
    case "LAST_64":
      stageName = "Last 64";
      break;
    case "ROUND_4":
      stageName = "Round 4";
      break;
    case "ROUND_3":
      stageName = "Round 3";
      break;
    case "ROUND_2":
      stageName = "Round 2";
      break;
    case "ROUND_1":
      stageName = "Round 1";
      break;
    case "GROUP_STAGE":
      stageName = "Group Stage";
      break;
    case "PRELIMINARY_ROUND":
      stageName = "Preliminary Round";
      break;
    case "QUALIFICATION":
      stageName = "Qualification";
      break;
    case "QUALIFICATION_ROUND_1":
      stageName = "Qualification Round 1";
      break;
    case "QUALIFICATION_ROUND_2":
      stageName = "Qualification Round 2";
      break;
    case "QUALIFICATION_ROUND_3":
      stageName = "Qualification Round 3";
      break;
    case "PLAYOFFS":
      stageName = "Playoffs";
      break;
    default:
      stageName = "Unknown Stage";
  }
  return stageName;
};
