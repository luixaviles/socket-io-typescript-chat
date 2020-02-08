#!/usr/bin/env bash
openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout example.key -out example.crt -subj "/CN=example.com" -days 3650
