#!/bin/sh
openapi-generator generate \
-i ../reference/customerfacing.yaml \
-g typescript-jquery \
-o .
#--additional-properties=library=apollo
