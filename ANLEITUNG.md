# Gelenkwerk als Web-App veröffentlichen

## 1. GitHub Pages (ca. 5 Minuten)
1. Auf github.com ein neues Repository anlegen, z. B. `gelenkwerk`, Sichtbarkeit **Public**.
2. "uploading an existing file" wählen und den gesamten Inhalt dieses Ordners hochladen (inklusive Ordner `icons`), dann "Commit changes".
3. Settings > Pages > Source: "Deploy from a branch", Branch `main`, Ordner `/ (root)`, speichern.
4. Nach ein bis zwei Minuten ist die App unter `https://<dein-name>.github.io/gelenkwerk/` erreichbar.

## 2. Auf dem Handy installieren
- Android (Chrome): Link öffnen, Menü, "Zum Startbildschirm hinzufügen".
- iPhone (Safari): Link öffnen, Teilen-Symbol, "Zum Home-Bildschirm".

Bis hierhin läuft die App ohne Konto. Verlauf und Tests liegen auf dem jeweiligen Gerät.

## 3. Kontoanmeldung einrichten (ca. 10 Minuten)
1. Auf supabase.com kostenlos registrieren, neues Projekt anlegen, Region **Frankfurt (eu-central-1)**.
2. SQL Editor öffnen, den Inhalt von `supabase.sql` einfügen und ausführen.
3. Authentication > Sign In / Providers > Email: "Confirm email" ausschalten. Dann klappt die Registrierung direkt in der App ohne Bestätigungslink.
4. Project Settings > API: "Project URL" und den "anon public" Key kopieren und in `config.js` eintragen.
5. Die geänderte `config.js` im GitHub-Repository ersetzen.
6. Jede Person registriert sich einmal in der App unter Verlauf > Konto und Daten.
7. Danach in Supabase unter Authentication > Sign In / Providers "Allow new users to sign up" ausschalten. Sonst kann sich jeder registrieren, der den Link kennt.

Der anon Key darf öffentlich im Repository stehen. Die Daten schützt die Regel aus `supabase.sql`: Jedes Konto sieht nur die eigene Zeile.

## Updates
Neue Dateien im Repository ersetzen und in `sw.js` die Versionsnummer (`gelenkwerk-v1`) erhöhen.
