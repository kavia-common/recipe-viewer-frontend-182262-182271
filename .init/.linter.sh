#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-viewer-frontend-182262-182271/recipe_app_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

